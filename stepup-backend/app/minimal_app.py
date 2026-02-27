import json
from typing import Callable

# Minimal ASGI app to serve seeded products when FastAPI can't load (dev fallback)

samples = [
    { 'id': '1', 'nome':'Nike Air Max 90', 'marca':'Nike', 'tamanho':42, 'preco':459.9, 'condicao':'novo', 'urlImagem':'https://placehold.co/350x300/EF4444/FFFFFF?text=Air+Max' },
    { 'id': '2', 'nome':'Adidas Ultraboost', 'marca':'Adidas', 'tamanho':40, 'preco':599.0, 'condicao':'novo', 'urlImagem':'https://placehold.co/350x300/EF4444/FFFFFF?text=Ultra' },
    { 'id': '3', 'nome':'New Balance 574', 'marca':'New Balance', 'tamanho':41, 'preco':320.0, 'condicao':'usado', 'urlImagem':'https://placehold.co/350x300/EF4444/FFFFFF?text=NB+574' },
    { 'id': '4', 'nome':'Vans Old Skool', 'marca':'Vans', 'tamanho':40, 'preco':249.0, 'condicao':'usado', 'urlImagem':'https://placehold.co/350x300/EF4444/FFFFFF?text=Vans' },
    { 'id': '5', 'nome':'Converse Chuck Taylor', 'marca':'Converse', 'tamanho':42, 'preco':189.9, 'condicao':'usado', 'urlImagem':'https://placehold.co/350x300/EF4444/FFFFFF?text=Converse' },
    { 'id': '6', 'nome':'Puma RS-X', 'marca':'Puma', 'tamanho':43, 'preco':399.0, 'condicao':'novo', 'urlImagem':'https://placehold.co/350x300/EF4444/FFFFFF?text=Puma' },
]

class MinimalApp:
    def __init__(self):
        self.products = samples
        # in-memory reviews store: product_id -> list of reviews
        self.reviews = {p['id']: [
            { 'id': 'r1', 'author': 'João', 'rating': 5, 'text': 'Muito bom, confortável e bonito.' },
        ] for p in samples}

    async def __call__(self, scope, receive, send):
        if scope['type'] != 'http':
            await send({
                'type': 'http.response.start',
                'status': 404,
                'headers': [(b'content-type', b'text/plain')],
            })
            await send({'type': 'http.response.body', 'body': b'Not Found'})
            return

        method = scope['method']
        path = scope['path']

        if path.startswith('/api/v1/produtos'):
            # POST review: /api/v1/produtos/{id}/reviews
            parts = path.split('/')
            if method == 'POST' and len(parts) >= 5 and parts[4] and parts[5] == 'reviews':
                # read body
                body_bytes = b''
                more_body = True
                while more_body:
                    message = await receive()
                    if message['type'] == 'http.request':
                        body_bytes += message.get('body', b'')
                        more_body = message.get('more_body', False)
                try:
                    payload = json.loads(body_bytes.decode('utf-8'))
                    pid = parts[4]
                    lst = self.reviews.setdefault(pid, [])
                    new = { 'id': str(len(lst) + 1), 'author': payload.get('author','Anon'), 'rating': int(payload.get('rating',5)), 'text': payload.get('text','') }
                    lst.append(new)
                    resp = json.dumps(new).encode('utf-8')
                    await send({'type': 'http.response.start', 'status': 201, 'headers': [(b'content-type', b'application/json'), (b'access-control-allow-origin', b'*')]})
                    await send({'type': 'http.response.body', 'body': resp})
                except Exception:
                    await send({'type': 'http.response.start', 'status': 400, 'headers': [(b'content-type', b'text/plain')]})
                    await send({'type': 'http.response.body', 'body': b'Bad Request'})
                return

            # GET reviews: /api/v1/produtos/{id}/reviews
            if method == 'GET' and len(parts) >= 5 and parts[4] and len(parts) >= 6 and parts[5] == 'reviews':
                pid = parts[4]
                lst = self.reviews.get(pid, [])
                body = json.dumps(lst).encode('utf-8')
                await send({'type': 'http.response.start', 'status': 200, 'headers': [(b'content-type', b'application/json'), (b'access-control-allow-origin', b'*')]})
                await send({'type': 'http.response.body', 'body': body})
                return

            # GET product(s)
            # if requesting a single product id
            parts = path.split('/')
            if len(parts) >= 5 and parts[4]:
                pid = parts[4]
                prod = next((p for p in self.products if p['id'] == pid), None)
                if prod:
                    body = json.dumps(prod).encode('utf-8')
                else:
                    await send({'type': 'http.response.start', 'status': 404, 'headers': [(b'content-type', b'text/plain')]})
                    await send({'type': 'http.response.body', 'body': b'Not Found'})
                    return
            else:
                body = json.dumps(self.products).encode('utf-8')
            await send({
                'type': 'http.response.start',
                'status': 200,
                'headers': [
                    (b'content-type', b'application/json'),
                    (b'access-control-allow-origin', b'*'),
                ],
            })
            await send({'type': 'http.response.body', 'body': body})
            return

        # default 404
        await send({
            'type': 'http.response.start',
            'status': 404,
            'headers': [(b'content-type', b'text/plain')],
        })
        await send({'type': 'http.response.body', 'body': b'Not Found'})


app = MinimalApp()

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

        if method == 'GET' and path.startswith('/api/v1/produtos'):
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

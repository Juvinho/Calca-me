from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..database import get_db
from ..models.product import Product
import uuid

router = APIRouter()


@router.get('/produtos')
def list_products(db: Session = Depends(get_db)):
    # simple list all
    prods = db.query(Product).all()
    # if empty, seed sample products
    if not prods:
        seed_products(db)
        prods = db.query(Product).all()
    return [serialize(p) for p in prods]


def serialize(p: Product):
    return {
        'id': str(p.id),
        'nome': p.nome,
        'marca': p.marca,
        'tamanho': p.tamanho,
        'preco': p.preco,
        'condicao': p.condicao,
        'urlImagem': p.url_imagem,
        'vendedorId': str(p.vendedor_id) if p.vendedor_id else None
    }


@router.get('/produtos/{prod_id}')
def get_product(prod_id: str, db: Session = Depends(get_db)):
    p = db.query(Product).filter(Product.id == prod_id).first()
    if not p:
        raise HTTPException(status_code=404, detail='Produto não encontrado')
    return serialize(p)


def seed_products(db: Session):
    samples = [
        { 'nome':'Nike Air Max 90', 'marca':'Nike', 'tamanho':42, 'preco':459.9, 'condicao':'novo', 'url_imagem':'https://placehold.co/350x300/EF4444/FFFFFF?text=Air+Max' },
        { 'nome':'Adidas Ultraboost', 'marca':'Adidas', 'tamanho':40, 'preco':599.0, 'condicao':'novo', 'url_imagem':'https://placehold.co/350x300/EF4444/FFFFFF?text=Ultra' },
        { 'nome':'New Balance 574', 'marca':'New Balance', 'tamanho':41, 'preco':320.0, 'condicao':'usado', 'url_imagem':'https://placehold.co/350x300/EF4444/FFFFFF?text=NB+574' },
        { 'nome':'Vans Old Skool', 'marca':'Vans', 'tamanho':40, 'preco':249.0, 'condicao':'usado', 'url_imagem':'https://placehold.co/350x300/EF4444/FFFFFF?text=Vans' },
        { 'nome':'Converse Chuck Taylor', 'marca':'Converse', 'tamanho':42, 'preco':189.9, 'condicao':'usado', 'url_imagem':'https://placehold.co/350x300/EF4444/FFFFFF?text=Converse' },
        { 'nome':'Puma RS-X', 'marca':'Puma', 'tamanho':43, 'preco':399.0, 'condicao':'novo', 'url_imagem':'https://placehold.co/350x300/EF4444/FFFFFF?text=Puma' },
    ]
    for s in samples:
        p = Product(id=str(uuid.uuid4()), nome=s['nome'], marca=s['marca'], tamanho=s['tamanho'], preco=s['preco'], condicao=s['condicao'], url_imagem=s['url_imagem'])
        db.add(p)
    db.commit()

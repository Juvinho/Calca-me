import uuid
from sqlalchemy import Column, String, Float, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from ..database import Base

class Product(Base):
    __tablename__ = 'products'
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    nome = Column(String(150), nullable=False)
    marca = Column(String(100), nullable=False)
    tamanho = Column(Float, nullable=False)
    preco = Column(Float, nullable=False)
    condicao = Column(String(10), nullable=False)
    url_imagem = Column(String(500), nullable=False)
    vendedor_id = Column(UUID(as_uuid=True), ForeignKey('users.id'), nullable=True)

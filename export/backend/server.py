from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
import uuid
from typing import List, Optional
from datetime import datetime
import json

# Initialize FastAPI app
app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

# MongoDB connection settings
MONGO_URL = os.environ.get("MONGO_URL", "mongodb://localhost:27017")
DB_NAME = os.environ.get("DB_NAME", "matech_database")

class ContactMessage(BaseModel):
    name: str
    email: str
    subject: str
    message: str
    created_at: Optional[datetime] = datetime.now()
    id: Optional[str] = None

@app.get("/api/")
async def root():
    return {"message": "Hello World"}

@app.get("/api/health")
async def health_check():
    return {"status": "ok", "service": "Matech.AI API", "timestamp": datetime.now().isoformat()}

@app.post("/api/contact")
async def submit_contact(contact: ContactMessage):
    # Generate a unique ID for the contact message
    contact.id = str(uuid.uuid4())
    
    # In a real application, we would store this in MongoDB
    # For now, we'll just return it with an ID
    
    # You could add code here to send an email notification
    
    return {
        "success": True,
        "message": "Contact form submitted successfully",
        "id": contact.id,
        "timestamp": datetime.now().isoformat()
    }

@app.get("/api/services")
async def get_services():
    # Return a list of services - this could come from MongoDB in a real application
    services = [
        {
            "id": "1",
            "title": "Chatbots Inteligentes",
            "description": "Desenvolvimento de assistentes virtuais que utilizam NLP e aprendizado de máquina para interações eficientes com clientes.",
            "icon": "chat"
        },
        {
            "id": "2",
            "title": "Agentes de IA",
            "description": "Automatização de tarefas complexas e tomada de decisões informadas para aumentar a eficiência operacional.",
            "icon": "agent"
        },
        {
            "id": "3",
            "title": "Automações em IA",
            "description": "Implementação de soluções que aumentam a eficiência e reduzem custos operacionais em diversos setores.",
            "icon": "automation"
        },
        {
            "id": "4",
            "title": "Análises e Insights",
            "description": "Coleta e análise de dados para geração de insights acionáveis que orientam decisões estratégicas.",
            "icon": "analytics"
        }
    ]
    return services

@app.get("/api/success-cases")
async def get_success_cases():
    # Return a list of success cases - this could come from MongoDB in a real application
    cases = [
        {
            "id": "1",
            "title": "Otimização de Custos",
            "description": "Redução de 30% nos custos operacionais de uma empresa de varejo através da automação de análises de dados.",
            "industry": "Varejo",
            "impact": "30% Redução"
        },
        {
            "id": "2",
            "title": "Aumento de Vendas",
            "description": "Impulsionamento de 45% nas vendas de uma empresa de serviços financeiros com a implementação de um chatbot personalizado.",
            "industry": "Serviços Financeiros",
            "impact": "45% Aumento"
        },
        {
            "id": "3",
            "title": "Eficiência Operacional",
            "description": "Diminuição de 40% no tempo de resposta de uma empresa de tecnologia por meio de agentes de IA.",
            "industry": "Tecnologia",
            "impact": "40% Redução"
        }
    ]
    return cases

import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './lib/firebase';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Process } from './components/Process';
import { Portfolio } from './components/Portfolio';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

export interface Client {
  id: string;
  name: string;
  description: string;
  image: string;
  roi: string;
}

const defaultClients: Client[] = [
  {
    id: '1',
    name: "E-commerce de Moda",
    description: "Aumento de 150% nas conversões após implementação da nova landing page de produtos",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400",
    roi: "+150% ROI"
  },
  {
    id: '2',
    name: "Startup de Tecnologia",
    description: "Crescimento de 200% na captação de leads qualificados para demonstração do produto",
    image: "https://images.unsplash.com/photo-1460925895918-afdab827c52f?auto=format&fit=crop&w=400",
    roi: "+200% ROI"
  },
  {
    id: '3',
    name: "Empresa de Serviços",
    description: "Redução de 40% no custo por aquisição de cliente após otimização da landing page",
    image: "https://images.unsplash.com/photo-1460925895919-afdab827c52f?auto=format&fit=crop&w=400",
    roi: "+180% ROI"
  }
];

function App() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchClients() {
      try {
        const clientsCollection = collection(db, 'clients');
        const clientsSnapshot = await getDocs(clientsCollection);
        const clientsList = clientsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Client[];
        
        setClients(clientsList.length > 0 ? clientsList : defaultClients);
      } catch (error) {
        console.error("Error fetching clients:", error);
        setClients(defaultClients);
      } finally {
        setLoading(false);
      }
    }

    fetchClients();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Benefits />
      <Process />
      <Portfolio clients={clients} loading={loading} />
      <Pricing />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { ProjectCard } from './ui/ProjectCard';

// Define projects data
const projects = [
  {
    title: 'Better Health Hackathon on CodeforCovid19',
    description: "The application addresses the RT-PCR kit shortage by providing AI-driven, rapid screening that accurately classifies X-rays and CT scans into normal, pneumonia, or COVID-19 categories, achieving 93.3% accuracy for X-rays and 99.1% for CT scans, with enhanced performance through data augmentation and a lightweight ResNet architecture.",
    image: '/assets/Better Health Hackathon on CodeforCovid19.png',
    link: '#',
    github: '#'
  },
  {
    title: 'Disease Prediction Using ML',
    description: "The project aims to automate disease prediction by using user or patient symptom data, reducing the time and cost of the initial diagnosis phase and generating a list of likely ailments based on user input.",
    image: '/assets/Disease Prediction Using ML.png',
    link: '#',
    github: '#'
  },
  {
    title: 'FORECASTING',
    description: "Forecasting is a forest fire management tool that uses a machine learning model to predict the likelihood of fires and a damage algorithm to estimate their severity, providing fire managers with vital data to make informed decisions and take appropriate precautions.",
    image: '/assets/FORECASTING.png',
    link: '#',
    github: '#'
  },
  {
    title: 'OpenCV Face Recognition',
    description: 'This project provides step-by-step instructions for face detection and recognition, leveraging pre-trained models and custom datasets to perform accurate identification in real time.',
    image: '/assets/OpenCV Face Recognition.png',
    link: '#',
    github: '#'
  },
  {
    title: 'Product Recommendation Engine(ML)',
    description: 'This collaborative product recommendation engine uses e-commerce data and Louvain clustering to suggest similar products, with a Flask API for the user interface and Gephi visualizations to analyze the detected communities.',
    image: '/assets/Product Recommendation Engine(ML).png',
    link: '#',
    github: '#'
  },
  {
    title: 'ReActor Portable',
    description: 'This software is meant to be a productive contribution to the rapidly growing AI-generated media industry. It will help artists with tasks such as animating a custom character or using the character as a model for clothing etc...',
    image: '/assets/ReActor Portable.png',
    link: '#',
    github: '#'

  },
  {
    title: 'Advanced Retail Monitoring System Development',
    description: 'I developed an intelligent monitoring system to track cashier activities, analyze customer behavior, record dwell times, monitor customer counts, generate reports, and issue alerts for rule violations.',
    image: '/assets/Advanced Retail Monitoring System Development.png',
    link: '#',
    github: '#'
  },
  {
    title: 'Object detection from satellite and drone images',
    description: 'I created an end-to-end pipeline for detecting small objects like stockpiles and mining deformations in large-scale satellite images, using a multi-scale sliding window approach with YOLOv8 and RetinaNet to accurately identify small-scale features.',
    image: '/assets/Object detection from satellite and drone images.png',
    link: '#',
    github: '#'
  },
  {
    title: 'Vehicle detection and tracking',
    description: 'This Project solve the Multiple Object Tracking(MOT) problem.',
    image: '/assets/Vehicle detection and tracking.png',
    link: '#',
    github: '#'
  },
  {
    title: 'ChatGPT API Integration',
    description: 'The project aims to develop an automated system for generating multiple-choice questions (MCQs) using the ChatGPT API. The system will take input text or topic keywords and produce relevant MCQs to aid in the creation of assessments, quizzes, or study materials.',
    image: '/assets/ChatGPT API Integration.png',
    link: '#',
    github: '#'
  },
  {
    title: 'Alchemy - OpeanAI API integrations',
    description: "The project delivers a seamless user experience through a responsive interface built with React.js, while Django ensures a secure and scalable backend for data management and authentication. By combining React.js and Django, development is expedited, and OpenAI integration adds advanced AI functionality.",
    image: '/assets/Alchemy - OpeanAI API integrations.png',
    link: '#',
    github: '#'
  },
];

export function Projects() {
  return (<SectionBackground>
    <section id="projects">
      <div className="container mx-auto px-8">
        <SectionTitle subtitle="Every project, a product. Every product, a solution with a story.">Projects</SectionTitle>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        
      </div>
    </section>
  </SectionBackground>
  );
}

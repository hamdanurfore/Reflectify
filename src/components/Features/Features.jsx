import React from "react";
import './style.css';
import Cards from './Cards';
import { useState } from "react";

const Features = () => {

    // Define your feature data array using useState if it's dynamic
    const [featuresData, setFeaturesData] = useState([

        {
            id: 1,
            title: "Organisation",
            description: "Allow users to organize their entries with tags, categories, or hashtags, making it easier to search and filter through their journal."
        },
        {
            id: 2,
            title: "Notification",
            description: "Offer customizable reminders to prompt users to write in their journal regularly. Notifications can also serve as motivational prompts or gentle nudges."
        },
        {
            id: 3,
            title: "Mood Tracking",
            description: "Incorporate mood tracking features that allow users to record their emotions alongside journal entries. This could be done through emoji selection, sliders, or text input."
        },
        {
            id: 4,
            title: "Location Tracking",
            description: "Integrate GPS functionality to automatically tag entries with location data, particularly useful for travel journals or when reminiscing about specific places."
        },
        {
            id: 5,
            title: "Filter",
            description: "Implement robust search functionality so users can quickly find entries based on keywords, dates, tags, or other criteria."
        },
        {
            id: 6,
            title: "Calendar View",
            description: "Provide a calendar view to give users an overview of their journal entries over time. Users can easily navigate to specific dates and review past entries."
        },
        // Add more feature objects as needed
    ]);


    return (
        <>
            <h1 id="card-heading" className="text-center italic font-light mb-7">
                Features for your <em className='italic font-bold'>every</em> need
            </h1>
            <div id="features" className="features">
                {/* Map through the featuresData array and render a Card component for each feature */}
                {featuresData.map((feature) => (
                    <Cards key={feature.id} title={feature.title} description={feature.description} />
                ))}
            </div>
        </>


    );
}


export default Features;
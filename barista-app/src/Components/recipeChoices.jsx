import React, { Component, useEffect, useState } from "react";


const RecipeChoices = ({ handleChange, label, choices, checked }) => {

    return (
        <div>
            <input
                type="text"
                name={label}
                value={checked}
                placeholder="Guess the ingredient..."
                onChange={handleChange}
                className = "textbox"
            />

            <div className="radio-buttons">
            {choices &&
                choices.map((choice) => (
                <li key={choice}>

                    {choice}

                </li>
                ))}
            </div>
        </div>
    );
};

export default RecipeChoices;
import React from 'react';
import People1 from '../Tailwind-Ui/People1';
export default function TailwindUiData() {
    return (
      <ul className="divide-y divide-gray-200">
        {People1.map((person) => (
          <li key={person.email} className="py-4 flex">
            <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{person.name}</p>
              <p className="text-sm text-gray-500">{person.email}</p>
            </div>
          </li>
        ))}
      </ul>
    )
  }
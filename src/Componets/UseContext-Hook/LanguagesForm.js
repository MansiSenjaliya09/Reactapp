import React, { useContext } from 'react'
import LanguagesContext from './LanguagesContext'

export default function LanguagesForm() {
  const {data}=  useContext(LanguagesContext);

  const obj={
    "en":{
        firstname:"firstname",
        lastname:"lastname"
    },
    "gu":{
        firstname:"имя",
        lastname:"фамилия"
    }
  }
  return (
    <div>
        <form>
            <label>
                {obj[data].firstname}
            </label>
            <input type='text' name="firstname"></input>
            <label>
                {obj[data].lastname}
            </label>
            <input type='text' name="lastname"></input>
        </form>
    </div>
  )
}

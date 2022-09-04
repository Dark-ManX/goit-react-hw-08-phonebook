import { Button } from '@mui/material';
import { useState } from "react";
import { useAddContactMutation, useGetContactsQuery } from "redux/contactsAPI";
import { Form, Input } from "./ContactForm.styled";

export default function ContactForm() {
    const [addContact] = useAddContactMutation();
    const {data} = useGetContactsQuery();

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleInput = (e) => {
        const {name, value} = e.target;

        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'number':
                setNumber(value);
                break;

            default:
                return;
        }
}    

    const reset = () => {
        setName('');
        setNumber('');
    }

    let include = false

    const handleSubmit = async (e) => {
        e.preventDefault();
        reset();
        
        for (const el of data) {
            if (el.name === name && el.phone === number) {
                include = true;
                alert('such contact already exist');
                break;
            }
        }    
        

        if (!include) {
            await addContact({name, phone: number});
        }
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>

                <Input id="standard-basic" label="Name" variant="standard"
                    value={name}
                    onChange={handleInput}
                    autoComplete='off'
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                
                <Input id="standard-basic"
                    label="Number"
                    variant="standard"
                    value={number}
                    onChange={handleInput}
                    autoComplete='off'
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
                
                <Button variant="contained" color="success" type="submit">Add contact</Button>
            </Form>
        </div>
    )
}

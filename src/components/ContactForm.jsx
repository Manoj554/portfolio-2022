import { useState } from "react";
import { useAppContext } from "../layout/Layout";
import TextInput from "./TextInput";

const ContactForm = () => {
    const defaultFormValue = { name: '', email: '', subject: '', phone: '', message: '' };
    const { toggleDarkMode } = useAppContext();
    const [formData, setFormData] = useState(defaultFormValue);
    const [error, setError] = useState('');

    const handleFormOnChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = (form) => {
        const { name, email, phone, subject, message } = form;
        if (!name) return 'name is required*';
        else if (!email) return 'email is required*';
        else if (!subject) return 'subject is required*';
        else if (!message) return 'message is required*';
        else if (phone && phone.length < 10) return 'please enter valid phone number';
        else return 'pass';
    };

    const handleSubmit = (e) => {
        setError('');
        e.preventDefault();
        let validate = validateForm(formData);
        if (validate === 'pass') {
            fetch('/api/mail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            }).then(res => res.json()).then(() => alert('Message sent')).catch(err => console.log(err));
            setFormData(defaultFormValue);
        } else {
            setError(validate);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={`flex-1 p-4 sm:p-8 ${!toggleDarkMode && 'bg-[#f0f2f5]'} shadow shadow-gray-400 rounded-md mt-8 lg:mt-0 lg:mx-8`}>
            <div className='w-full flex flex-col sm:flex-row'>
                <TextInput
                    label="Name"
                    name="name"
                    placeholder="Enter your name"
                    required
                    value={formData.name}
                    onChange={handleFormOnChange}
                />
                <TextInput
                    label="Contact No."
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleFormOnChange}
                />
            </div>
            <TextInput
                label="Email"
                name="email"
                type="email"
                required
                placeholder="Enter your email account"
                value={formData.email}
                onChange={handleFormOnChange}
            />
            <TextInput
                label="Subject"
                name="subject"
                required
                placeholder="Enter your prospective"
                value={formData.subject}
                onChange={handleFormOnChange}
            />
            <TextInput
                texarea
                label="Message"
                name="message"
                placeholder="Feel free to write . . ."
                value={formData.message}
                onChange={handleFormOnChange}
            />
            <p className="text-md font-normal text-red-600 mx-4">{error}</p>
            <button className='py-2 px-6 rounded-md m-4 text-white  bg-blue-600'>Send Message</button>
        </form>
    )
}

export default ContactForm
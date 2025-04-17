import Navbar from "../component/Navbar"
export default function Connect() {

    return (
        <>
            <header className='w-[100%] flex justify-center  '>
                <Navbar />
            </header>
            <main className="flex items-center justify-center mt-[120px]">
                <form
                    className="Form"
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                >
                    {/* This hidden input is needed for Netlify to identify the form */}
                    <input type="hidden" name="form-name" value="contact" />

                    {/* Honeypot field to prevent spam */}
                    <p hidden>
                        <label>Don’t fill this out: <input name="bot-field" /></label>
                    </p>

                    <p>
                        <label>Your Email: <input type="email" name="email" required placeholder="Enter Your Email" /></label>
                    </p>
                    <p>
                        <label htmlFor="Message">Message: <input type="text" name="message" required placeholder="Enter Your Message" />
                        </label>
                    </p>

                    <p>
                        <button type="submit" className="p-5 border-1 border-black">Send</button>
                    </p>
                </form>

            </main>

        </>
    )
}
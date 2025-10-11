import React from 'react'
import { ModeToggle } from "@/components/mode-toogle";

function Privacy() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <ModeToggle />
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h2 className='font-bold font-serif text-3xl'>Privacy Policy for [Your Website Name]</h2>

<p>Last updated: [Date]</p>

<p>This Privacy Policy describes how [Your Website Name] ("we," "us," or "our") collects, uses, and shares personal information when you visit and interact with our website. Please review this policy carefully.</p>

<h3 className='font-bold font-serif text-2xl'>1. Information We Collect</h3>
    <p><span className='font-semibold'>Personal Information:</span> We may collect personal information, including but not limited to, your name, email address, postal address, and phone number when you provide it voluntarily.</p>

    <p><span className='font-semibold'>Usage Data:</span> We collect information about how you use our website, such as your IP address, browser type, and operating system.</p>

<h3 className='font-bold font-serif text-2xl'>2. How We Use Your Information</h3>

<p>We use the collected information for the following purposes:</p>

    <p>To provide you with the products or services you request.
    To improve and optimize our website.
    To communicate with you, respond to inquiries, and provide customer support.
    To send newsletters or marketing materials if you have consented to receive them.
    To comply with legal obligations, including those outlined in the Personal Information Protection and Electronic Documents Act (PIPEDA).</p>

<h3 className='font-bold font-serif text-2xl'>3. Sharing Your Information</h3>

<p>We may share your personal information in the following circumstances:</p>

    <p>With service providers who help us operate our website.
    With your explicit consent.
    In response to legal requests or to protect our rights.</p>

<h3 className='font-bold font-serif text-2xl'>4. Cookies and Tracking Technologies</h3>

<p>We may use cookies and similar tracking technologies to enhance your browsing experience and collect data about your usage patterns. You can manage your cookie preferences.</p>

<h3 className='font-bold font-serif text-2xl'>5. Your Privacy Rights</h3>

<p>You have the right to access, update, or delete your personal information in accordance with PIPEDA. To exercise these rights or for any privacy-related inquiries, please contact us at [Your Contact Information].</p>

<h3 className='font-bold font-serif text-2xl'>6. Security</h3>

<p>We take measures to protect your personal information but cannot guarantee absolute security. By using our website, you acknowledge and accept the associated risks.</p>

<h3 className='font-bold font-serif text-2xl'>7. Changes to This Privacy Policy</h3>

<p>We may update this Privacy Policy to reflect changes in our practices or legal requirements, including any updates to PIPEDA. We will post the updated policy on our website with the revised effective date.</p>

<h3 className='font-bold font-serif text-2xl'>8. Contact Information</h3>

<p>If you have questions or concerns about this Privacy Policy, please contact us at [Your Contact Information].</p>

<p>This revision emphasizes PIPEDA compliance and your commitment to respecting the privacy rights of your users in accordance with Canadian privacy laws.</p>
</main>
        </div>
  )
}

export default Privacy
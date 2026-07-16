import Link from "next/link";
import { Container } from "@/components/ui";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20">
      <Container className="max-w-3xl">
        <div className="mb-10">
          <h1 className="font-heading text-4xl sm:text-5xl font-medium tracking-tight text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-text-secondary font-body">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="space-y-10 text-text-secondary/90 font-body leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-xl font-heading text-white">1. Introduction</h2>
            <p>
              At XIBOTIX, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
              disclose, and safeguard your information when you visit our website or engage with our services 
              and robotic solutions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-heading text-white">2. Information We Collect</h2>
            <p>
              We may collect information about you in a variety of ways, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-text-secondary/80">
              <li><strong>Personal Data:</strong> Name, email address, and contact details provided via forms.</li>
              <li><strong>Usage Data:</strong> Information automatically collected by our servers regarding your interaction with our site.</li>
              <li><strong>Device Telemetry:</strong> Anonymized data from our hardware products (subject to separate hardware agreements).</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-heading text-white">3. How We Use Your Information</h2>
            <p>
              Having accurate information about you permits us to provide you with a smooth, efficient, 
              and customized experience. We use your data to respond to inquiries, improve our AI models, 
              and optimize our web presence.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-heading text-white">4. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at:{" "}
              <a href="mailto:connect@xibotix.com" className="text-accent hover:text-white transition-colors">
                connect@xibotix.com
              </a>
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}

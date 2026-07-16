import Link from "next/link";
import { Container } from "@/components/ui";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20">
      <Container className="max-w-3xl">
        <div className="mb-10">
          <h1 className="font-heading text-4xl sm:text-5xl font-medium tracking-tight text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-text-secondary font-body">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="space-y-10 text-text-secondary/90 font-body leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-xl font-heading text-white">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the XIBOTIX website and services, you agree to comply with and be bound 
              by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-heading text-white">2. Intellectual Property</h2>
            <p>
              All content, designs, robotics architectures, and cognitive systems displayed on this website are 
              the exclusive property of XIBOTIX Private Limited and are protected by international copyright 
              and trademark laws.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-heading text-white">3. Use of Services</h2>
            <p>
              Our humanoid and rehabilitation devices are provided under specific hardware and software 
              agreements. The information on this website is for general informational purposes only and does 
              not constitute a binding medical or technical warranty.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-heading text-white">4. Limitation of Liability</h2>
            <p>
              XIBOTIX shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
              resulting from your access to or use of, or inability to access or use, the services.
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}

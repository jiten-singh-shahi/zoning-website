"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
import { Mail, MessageSquare, Handshake } from "lucide-react";
import { PartnershipForm } from "@/components/forms/PartnershipForm";
import { CheckCircle, Loader2 } from "lucide-react";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { ZodError } from "zod";

export default function ContactPage() {
  const [formData, setFormData] = React.useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = React.useState<{
    firstName?: string;
    lastName?: string;
    email?: string;
    message?: string;
  }>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setErrors({});

    // Validate with Zod
    const result = contactFormSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: typeof errors = {};
      result.error.issues.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof typeof fieldErrors] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://app.zoninglogic.com";
      const response = await fetch(`${appUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "Customer",
          first_name: result.data.firstName,
          last_name: result.data.lastName,
          email: result.data.email,
          message: result.data.message,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to submit message");
      }

      setIsSuccess(true);
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
      setErrors({});
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="py-20 md:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-20">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* Forms Section with Tabs */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Tabs defaultValue="contact" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="contact">
                        <div className="flex items-center justify-center gap-2">
                          <MessageSquare className="h-4 w-4 flex-shrink-0" />
                          <span className="hidden sm:inline">General Contact</span>
                          <span className="sm:hidden">Contact</span>
                        </div>
                      </TabsTrigger>
                      <TabsTrigger value="partnership">
                        <div className="flex items-center justify-center gap-2">
                          <Handshake className="h-4 w-4 flex-shrink-0" />
                          <span className="hidden sm:inline">Partnership</span>
                          <span className="sm:hidden">Partner</span>
                        </div>
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="contact">
                      <Card className="shadow-lg border-2">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <MessageSquare className="h-5 w-5 text-primary" />
                            Send us a message
                          </CardTitle>
                          <CardDescription>
                            Fill out the form and we'll get back to you within 24 hours.
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          {isSuccess ? (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="text-center py-8"
                            >
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10"
                              >
                                <CheckCircle className="h-8 w-8 text-primary" />
                              </motion.div>
                              <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                              <p className="text-muted-foreground">
                                Thank you for contacting us. We'll get back to you soon.
                              </p>
                            </motion.div>
                          ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                  <label
                                    htmlFor="firstName"
                                    className="block text-sm font-medium mb-2"
                                  >
                                    First Name <span className="text-red-500">*</span>
                                  </label>
                                  <Input
                                    id="firstName"
                                    type="text"
                                    value={formData.firstName}
                                  onChange={(e) => {
                                    setFormData({ ...formData, firstName: e.target.value });
                                    // Clear error on change
                                    if (errors.firstName) {
                                      setErrors({ ...errors, firstName: undefined });
                                    }
                                  }}
                                    disabled={isSubmitting}
                                    className={`transition-all focus:ring-2 focus:ring-primary/20 ${
                                      errors.firstName ? "border-red-500" : ""
                                    }`}
                                  />
                                  {errors.firstName && (
                                    <motion.p
                                      initial={{ opacity: 0, y: -5 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      className="mt-1 text-sm text-red-600 dark:text-red-400"
                                    >
                                      {errors.firstName}
                                    </motion.p>
                                  )}
                                </div>
                                <div>
                                  <label
                                    htmlFor="lastName"
                                    className="block text-sm font-medium mb-2"
                                  >
                                    Last Name <span className="text-red-500">*</span>
                                  </label>
                                  <Input
                                    id="lastName"
                                    type="text"
                                    value={formData.lastName}
                                    onChange={(e) => {
                                      setFormData({ ...formData, lastName: e.target.value });
                                      if (errors.lastName) {
                                        setErrors({ ...errors, lastName: undefined });
                                      }
                                    }}
                                    disabled={isSubmitting}
                                    className={`transition-all focus:ring-2 focus:ring-primary/20 ${
                                      errors.lastName ? "border-red-500" : ""
                                    }`}
                                  />
                                  {errors.lastName && (
                                    <motion.p
                                      initial={{ opacity: 0, y: -5 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      className="mt-1 text-sm text-red-600 dark:text-red-400"
                                    >
                                      {errors.lastName}
                                    </motion.p>
                                  )}
                                </div>
                              </div>
                              <div>
                                <label
                                  htmlFor="email"
                                  className="block text-sm font-medium mb-2"
                                >
                                  Email <span className="text-red-500">*</span>
                                </label>
                                <Input
                                  id="email"
                                  type="text"
                                  value={formData.email}
                                  onChange={(e) => {
                                    setFormData({ ...formData, email: e.target.value });
                                    if (errors.email) {
                                      setErrors({ ...errors, email: undefined });
                                    }
                                  }}
                                  disabled={isSubmitting}
                                  className={`transition-all focus:ring-2 focus:ring-primary/20 ${
                                    errors.email ? "border-red-500" : ""
                                  }`}
                                />
                                {errors.email && (
                                  <motion.p
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-1 text-sm text-red-600 dark:text-red-400"
                                  >
                                    {errors.email}
                                  </motion.p>
                                )}
                              </div>
                              <div>
                                <label
                                  htmlFor="message"
                                  className="block text-sm font-medium mb-2"
                                >
                                  Message <span className="text-red-500">*</span>
                                </label>
                                <Textarea
                                  id="message"
                                  rows={6}
                                  value={formData.message}
                                  onChange={(e) => {
                                    setFormData({ ...formData, message: e.target.value });
                                    if (errors.message) {
                                      setErrors({ ...errors, message: undefined });
                                    }
                                  }}
                                  disabled={isSubmitting}
                                  className={`transition-all focus:ring-2 focus:ring-primary/20 ${
                                    errors.message ? "border-red-500" : ""
                                  }`}
                                />
                                {errors.message && (
                                  <motion.p
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-1 text-sm text-red-600 dark:text-red-400"
                                  >
                                    {errors.message}
                                  </motion.p>
                                )}
                              </div>
                              {error && (
                                <motion.div
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  role="alert"
                                  aria-live="assertive"
                                  className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-800 dark:border-red-800 dark:bg-red-950 dark:text-red-200"
                                >
                                  {error}
                                </motion.div>
                              )}
                              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                                {isSubmitting ? (
                                  <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Sending...
                                  </>
                                ) : (
                                  "Send Message"
                                )}
                              </Button>
                            </form>
                          )}
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <TabsContent value="partnership">
                      <PartnershipForm />
                    </TabsContent>
                  </Tabs>
                </motion.div>
              </div>

              {/* Contact Info & FAQ Sidebar */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Card className="shadow-lg border-2">
                    <CardHeader>
                      <CardTitle>Contact Information</CardTitle>
                      <CardDescription>
                        Reach out to us through any of these channels.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <motion.div
                        whileHover={{ x: 4 }}
                        className="flex items-start gap-4 cursor-pointer"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10"
                        >
                          <Mail className="h-5 w-5 text-primary" />
                        </motion.div>
                        <div>
                          <h3 className="font-semibold">Email</h3>
                          <a
                            href="mailto:hello@zoninglogic.com"
                            className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                          >
                            hello@zoninglogic.com
                          </a>
                        </div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Card className="shadow-lg border-2">
                    <CardHeader>
                      <CardTitle>Common Questions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 text-sm">
                        <div>
                          <h4 className="font-semibold mb-1">
                            How accurate is the zoning analysis?
                          </h4>
                          <p className="text-muted-foreground">
                            Our fine-tuned AI model is trained on comprehensive
                            bylaw data and provides highly accurate results.
                            However, always verify with local authorities for
                            critical decisions.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">
                            What regions do you cover?
                          </h4>
                          <p className="text-muted-foreground">
                            We're currently in beta with coverage for some parts of Ontario. Coverage is increasing. British Columbia is next in line. We're expanding coverage based on demand. Contact us to see if your region is supported.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

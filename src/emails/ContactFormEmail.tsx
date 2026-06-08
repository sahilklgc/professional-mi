import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ContactFormEmailProps {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export const ContactFormEmail = ({
  name,
  email,
  phone,
  service,
  message,
}: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Inquiry from {name} - PCCI Website</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Website Inquiry</Heading>
          <Text style={text}>
            You have received a new message from the PCCI website contact form.
          </Text>
          <Hr style={hr} />
          
          <Section style={section}>
            <Text style={label}>Name:</Text>
            <Text style={value}>{name}</Text>
            
            <Text style={label}>Email:</Text>
            <Text style={value}>{email}</Text>
            
            <Text style={label}>Phone:</Text>
            <Text style={value}>{phone}</Text>
            
            <Text style={label}>Service of Interest:</Text>
            <Text style={value}>{service}</Text>
            
            <Text style={label}>Message:</Text>
            <Text style={value}>{message}</Text>
          </Section>

          <Hr style={hr} />
          <Text style={footer}>
            This email was sent automatically from the professional-mi.com contact form.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactFormEmail;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "40px auto",
  padding: "20px 40px 40px",
  marginBottom: "64px",
  borderRadius: "8px",
  border: "1px solid #e2e8f0",
};

const h1 = {
  color: "#1e293b",
  fontSize: "24px",
  fontWeight: "600",
  lineHeight: "40px",
  margin: "0 0 20px",
};

const text = {
  color: "#475569",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0 0 20px",
};

const section = {
  marginTop: "20px",
  marginBottom: "20px",
};

const label = {
  color: "#64748b",
  fontSize: "14px",
  fontWeight: "600",
  margin: "16px 0 4px",
  textTransform: "uppercase" as const,
};

const value = {
  color: "#0f172a",
  fontSize: "16px",
  margin: "0 0 16px",
  whiteSpace: "pre-wrap" as const,
};

const hr = {
  borderColor: "#e2e8f0",
  margin: "20px 0",
};

const footer = {
  color: "#94a3b8",
  fontSize: "12px",
  lineHeight: "16px",
};

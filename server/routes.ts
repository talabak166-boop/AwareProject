import type { Express } from "express";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<void> {
  app.post("/api/send-email", async (req, res) => {
    try {
      const result = insertContactMessageSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ 
          error: "Missing required fields",
          details: result.error.flatten() 
        });
      }

      const { name, email, message } = result.data;

      await storage.createContactMessage({ name, email, message });

      const recipientEmail = "vincent.bremer.vuarnoz@gmail.com";
      const subject = `New Message from ${name} - Aware Programming`;
      const body = `
Name: ${name}
Email: ${email}

Message:
${message}

---
This message was sent from the Aware Programming website.
      `;

      console.log("Email prepared:", {
        to: recipientEmail,
        from: email,
        subject: subject,
      });

      return res.json({
        success: true,
        message: "Email prepared successfully",
        details: {
          to: recipientEmail,
          from: email,
          subject: subject,
        },
      });
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });
}

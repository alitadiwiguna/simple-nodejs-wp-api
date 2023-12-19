"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 5000;
// Middleware to parse JSON request bodies
app.use(body_parser_1.default.json());
// Define a route for handling POST requests to /via/v1/proposal/publish-day
app.post('/via/v1/proposal/publish-day', (req, res) => {
    // Extract parameters from the request body
    const { bo_id, bo_header_id, ordinal, date, presentation, detail } = req.body;
    // Add your business logic here
    console.log(req.body);
    // Simulate generating wpId and permalink
    const wpId = 'wpId-83bx98f8998hs3h'; // Replace with your logic to generate wpId
    const permalink = `https://viacroatia.mintaka.hr/page-element/daily-template-1/`; // Replace with your permalink logic
    // Send a response with wpId and permalink
    res.status(200).json({
        wpId,
        permalink,
    });
});
// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

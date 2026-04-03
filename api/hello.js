export default async function handler(req, res) {
  // เปลี่ยน URL ตรงนี้เป็นของ Google Script ของคุณ
  const GOOGLE_URL = "https://script.google.com/macros/s/AKfycbwEvei4MHqCJwEnTUYF1aFSXqq0q-em5C5JQUCZJdzoP0ORD-Y6oa93VhN-MYYpKV6u/exec";
  
  const response = await fetch(GOOGLE_URL);
  const data = await response.text();
  
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(data);
}

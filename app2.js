const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Cities I want to visit </title> </head>')
      
      res.write('<body>')

      res.write('<h1>Cities I want to visit</h1>');
      res.write('<p>Below is a table listing four cities I have never visited and would love to visit one day</p>');
      res.write('<table border="1">');
      res.write('<tr><th>New city</th><th>Reason to visit</th><th>Distance from SF</th><th>Estimated travel cost</th></tr>');
      res.write('<tr><td>Kyoto, Japan</td><td>Explore temples and traditional gardens</td><td>280 miles</td><td>$120</td></tr>');
      res.write('<tr><td>Reykjavik, Iceland</td><td>Experience the Northern Lights and hot springs</td><td>5,300 miles</td><td>$1,100</td></tr>');
      res.write('<tr><td>Rome, Italy</td><td>See luxury shopping places</td><td>6,100 miles</td><td>$1,350</td></tr>');
      res.write('<tr><td>Sydney, Australia</td><td>Visit the Sydney Opera House and beaches</td><td>4,800 miles</td><td>$1,250</td></tr>');
      res.write('</table>');
      
         
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the start
})
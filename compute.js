const http = require('http')   
                                
const hostname = process.env.hostname || '127.0.0.1'    
const port = process.env.port || 3001               

const server =
  http.createServer(            
    (req,res)=> {              
      console.log("Request recieved")
      console.log(req.url)
      
      let fake_url = "https://fake.com/path" + req.url
      const parsed_url = new URL(fake_url)
      const search_params = parsed_url.searchParams

      if (req.method === 'GET' ) {

        const x = parseFloat(search_params.get("x")) || 0;
         const y = parseFloat(search_params.get("y")) || 0;

         const resultX = Math.asinh(x);
         const resultY = Math.asinh(y);

         res.statusCode = 200      //code for OK
         res.setHeader('Content-Type', 'text/plain') 
         
         res.end(`asinh(${x}) is ${resultX} and asinh(${y}) is ${resultY}`);
        
      } else {
        console.log("Status 404")
        res.statusCode = 404;
        res.end();
      }

    }                             
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the start
})
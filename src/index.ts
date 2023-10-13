import app from "./app";

const port = process.env.PORT || 3003;

async function main() {
  app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });
}
main();
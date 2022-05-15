console.log("main", process.env);
if (process.env.NODE_ENV === "development") {
  console.log("是开发环境");
} else if (process.env.NODE_ENV === "production") {
  console.log("是生产环境");
}

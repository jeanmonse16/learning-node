exports.success = (req, res, message, status) => {
  console.log("[response.success]: Operación exitosa")
  res.status(status || 200).send({
      error: "",
      body: message
  })
}

exports.error = (req, res, message, status, details) =>{
    console.error("[response error]: " + details)
    res.status(status || 404).send({
      error: message,
      body: ""
    })
}
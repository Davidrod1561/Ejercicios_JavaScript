// Definición de los productos y sus precios
const productos = [
    { nombre: "Aqua", precio: 200 },
    { nombre: "Emoción", precio: 180 },
    { nombre: "Alegría", precio: 160 },
    { nombre: "Frescura", precio: 150 }
  ];
  
  // Definición de los vendedores
  const vendedores = [
    { nombre: "Juana", ventas: [0, 0, 0, 0], total: 0 },
    { nombre: "Pedro", ventas: [0, 0, 0, 0], total: 0 }
  ];
  
  // Función para obtener la cantidad vendida de un producto por un vendedor
  function obtenerCantidadVendida(vendedorIndex, productoIndex) {
    return vendedores[vendedorIndex].ventas[productoIndex];
  }
  
  // Función para incrementar la cantidad vendida de un producto por un vendedor
  function incrementarCantidadVendida(vendedorIndex, productoIndex, cantidad) {
    vendedores[vendedorIndex].ventas[productoIndex] += cantidad;
  }
  
  // Función para calcular la suma total de dinero recolectada por un vendedor
  function calcularTotalVendedor(vendedorIndex) {
    const ventas = vendedores[vendedorIndex].ventas;
    const precios = productos.map(producto => producto.precio);
    const total = ventas.reduce((acc, cantidad, index) => acc + (cantidad * precios[index]), 0);
    vendedores[vendedorIndex].total = total;
  }
  
  // Función para determinar el empleado del mes
  function determinarEmpleadoDelMes() {
    let empleadoDelMes = "";
    let maxTotal = 0;
    let empate = false;
  
    for (const vendedor of vendedores) {
      if (vendedor.total > maxTotal) {
        empleadoDelMes = vendedor.nombre;
        maxTotal = vendedor.total;
        empate = false;
      } else if (vendedor.total === maxTotal) {
        empate = true;
      }
    }
  
    if (empate) {
      return "Empate";
    } else {
      return empleadoDelMes;
    }
  }
  
  // Función principal para interactuar con el programa
  function interactuar() {
    let opcion = "";
  
    while (opcion !== "0") {
      opcion = prompt(`Ingrese una opción:
      1. Registrar una venta
      2. Mostrar ventas por vendedor
      3. Mostrar total de dinero recolectada por vendedor
      4. Mostrar empleado del mes
      0. Salir`);
  
      switch (opcion) {
        case "1":
          const vendedorIndex = parseInt(prompt("Ingrese el índice del vendedor (0 para Juana, 1 para Pedro):"));
          const productoIndex = parseInt(prompt("Ingrese el índice del producto (0 para Aqua, 1 para Emoción, 2 para Alegría, 3 para Frescura):"));
          const cantidad = parseInt(prompt("Ingrese la cantidad vendida:"));
  
          if (isNaN(vendedorIndex) || isNaN(productoIndex) || isNaN(cantidad)) {
            console.error("Error: Los valores ingresados deben ser numéricos.");
          } else {
            incrementarCantidadVendida(vendedorIndex, productoIndex, cantidad);
            calcularTotalVendedor(vendedorIndex);
          }
          break;
  
        case "2":
          for (const vendedor of vendedores) {
            console.log(`Vendedor: ${vendedor.nombre}`);
            for (let i = 0; i < productos.length; i++) {
              console.log(`  ${productos[i].nombre}: ${obtenerCantidadVendida(vendedores.indexOf(vendedor), i)}`);
            }
          }
          break;
  
        case "3":
          for (const vendedor of vendedores) {
            console.log(`Vendedor: ${vendedor.nombre}`);
            console.log(`  Total: ${vendedor.total}`);
          }
          break;
  
        case "4":
          const empleadoMes = determinarEmpleadoDelMes();
          console.log(`Empleado del Mes: ${empleadoMes}`);
          break;
  
        case "0":
          console.log("Programa finalizado.");
          break;
  
        default:
          console.error("Error: Opción inválida.");
          break;
      }
    }
  }
  
  // Iniciar el programa
  interactuar();
  
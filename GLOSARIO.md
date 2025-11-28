Glosario - Trabajo Práctico Cuatro

## Términos del Proyecto

### **TypeScript**

Lo básico: es JavaScript con **superpoderes**. Añade tipos de datos para evitar errores antes de que sucedan. Más seguridad, menos dolores de cabeza.

### **Interface**

Es como un "contrato" que define qué propiedades debe tener un objeto y de qué tipo son. Por ejemplo, una `interface Product` dice: "debes tener un `name` (texto) y un `price` (número)".

```typescript
interface Product {
  name: string;
  price: number;
}
```

### **Type**

Parecido a `interface`, pero más flexible. Lo usas para definir tipos personalizados, incluyendo tipos simples como strings o números.

```typescript
type OrderStatus = "pending" | "shipped" | "delivered";
```

### **Enum**

Es una forma de crear un conjunto de **opciones limitadas y nombradas**. Útil cuando solo quieres que se use ciertos valores. Por ejemplo: `Info`, `Warning`, `Error`.

```typescript
enum LogLevel {
  Info,
  Warning,
  Error,
}
```

### **Union Type (Unión de Tipos)**

Cuando una variable puede ser de **más de un tipo** a la vez. Se usa la barra `|` para separar. Por ejemplo: `string | number` significa "puede ser texto o número".

```typescript
let productId: string | number = "ABC123";
productId = 456; // También es válido
```

### **Tipado**

Significa que especificamos qué tipo de dato debe ser cada variable o parámetro. TypeScript nos obliga a ser claros con los tipos.

```typescript
const myProduct: Product = { ... }  // Decimos que myProduct es de tipo Product
```

### **Transpilación**

Convertir código TypeScript a JavaScript. Lo hace el compilador `tsc` (TypeScript Compiler). Es necesario porque los navegadores y Node.js entienden JavaScript, no TypeScript.

### **Compilar**

Traducir el código TypeScript a JavaScript ejecutable. Se hace con el comando `npx tsc`.

---

## Conceptos Importantes del Proyecto

### **¿Por qué usar TypeScript?**

- **Menos errores**: Te avisa si intentas asignar un valor incorrecto a una variable.
- **Mejor documentación**: Al ver los tipos, sabes exactamente qué espera cada función.
- **Autocompletado**: Los editores te ayudan con sugerencias mientras escribes.

### **Estructura del Proyecto**

Este proyecto organiza ejemplos en tres carpetas:

- **`tipos_basicos/`**: Lo fundamental de TypeScript (tipos simples, unions).
- **`literales_enum/`**: Tipos literales y enumeraciones.
- **`funciones_tipados/`**: Funciones con parámetros y retornos tipados.

### **¿Cómo ejecutar ejemplos?**

```bash
npx tsx src/tipos_basicos/basic.ts  # directa
```

o

```bash
npm run build    # Compilar
node dist/tipos_basicos/basic.js  # Ejecutar el compilado
```

---

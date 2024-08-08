class Cliente{
  constructor(nombre,impuesto){
    this._nombre = nombre;
    this._impuesto = impuesto;
  }

  // Getter y Setter de nombre de Cliente

  get nombre(){
    return this._nombre;
  }

  set nombre(nombreSet){
    if (nombreSet === '' || typeof(nombreSet)!== 'string'){
      console.log('Favor ingresar nombre de cliente o verificar el tipo de dato sea cadena de texto');
    }else{
      this._nombre = nombreSet;
    }
  }

  calcularImpuesto(){
    if (this._impuesto !== null){
      return (this._impuesto.montoBrutoAnual - this._impuesto.deducciones)*0.21;
    }else{
      console.log('Impuesto mal ingresado');
    }
  }
}

export {
  Cliente
}
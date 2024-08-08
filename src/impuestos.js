class Impuestos{
  constructor(montoBrutoAnual, deducciones){
    this._montoBrutoAnual = montoBrutoAnual;
    this._deducciones = deducciones;
  }

  // Getters de 'Monto Bruto Anual' y 'Deducciones'
  get montoBrutoAnual(){
    return this._montoBrutoAnual;
  }

  get deducciones(){
    return this._deducciones;
  }

  // Setters 'Monto Bruto Anual' y 'Deducciones' 
  set montoBrutoAnual(monBruAn){
    if(monBruAn === null || typeof(monBruAn) !== 'number'){
      console.log('Ingresar Monto Bruto Anual valido y de tipo numero')
    } else {
      this._montoBrutoAnual = monBruAn;
    }
  }
  
  set deducciones(deduc){
    if (deduc === null || typeof(deduc) !== 'number') {
      console.log('Ingresar monto de Seduccion valido y de tipo numero')
    } else {
      this._deducciones = deduc;
    }
  }
}

export{
  Impuestos
}
function Appliances(){
  this.On = false
}

Appliances.prototype.turnOn = function(){
  this.On = true
  console.log('устройство включено')
}

Appliances.prototype.turnOff = function(){
  this.On = false
  console.log('устройство выключено')
}

function Lamp(){
  this.type = 'Lamp';
}

Lamp.prototype = new Appliances();

Lamp.prototype.turnOn = function(){
  this.On = true
  console.log('лампа включена')
}

Lamp.prototype.currentpower = 100;

function Computer() {
  this.type = 'Computer';
}

Computer.prototype = new Appliances();

Computer.prototype.turnOn = function() {
    this.On = true
    console.log('Компьютер включен')
}

Computer.prototype.turnOff = function() {
    this.On = false
    console.log('Компьютер выключен')
}

Computer.prototype.currentpower = 200;

let lamp = new Lamp()
let computer = new Computer()

console.log(lamp);
console.log(computer);


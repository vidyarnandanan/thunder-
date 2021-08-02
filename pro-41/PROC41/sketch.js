const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var umbrealla1;

function preload(){
}

function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;
    background("black")
    umbrealla1=new umbrella(300,300,50)
}

function draw(){
    umbrealla1.display()
}   


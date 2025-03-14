import React, { useRef, useEffect } from 'react';
import Matter from 'matter-js';

function WreckingBall() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Composites = Matter.Composites,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      Composite = Matter.Composite,
      Constraint = Matter.Constraint,
      Bodies = Matter.Bodies;

    const engine = Engine.create();
    const world = engine.world;

    const render = Render.create({
      canvas: canvasRef.current,
      engine: engine,
      options: {
        width: 800,
        height: 800,
        showAngleIndicator: true,
        wireframes: false,
        background: '#000', // black background
      },
    });

    Render.run(render);

    const runner = Runner.create();
    Runner.run(runner, engine);

    Composite.add(world, [
      
      Bodies.rectangle(0, 0, 0, 0, { isStatic: true,}), // Dark gray top wall
      Bodies.rectangle(0, 0, 0, 0, { isStatic: true,}), // Dark gray bottom wall
      Bodies.rectangle(0, 0, 0, 0, { isStatic: true,}), // Dark gray right wall
      Bodies.rectangle(0, 0, 0, 0, { isStatic: true,}), // Dark gray left wall
    ]);

    const ball = [Bodies.circle(400, 20, 20, {
        density: 0.04,
        frictionAir: 0.005,
        render: { fillStyle: '#f0f000' }, // Pink ball
      }),Bodies.circle(200, 20, 20, {
        density: 0.04,
        frictionAir: .04,
        content:"M",
        render: { fillStyle: '#f0f000' }, // Pink ball
      }),Bodies.circle(300,20, 20, {
        density: 0.04,
        frictionAir: 0.005,
        render: { fillStyle: '#f000ff' }, // Pink rectangle
      })
    ]
    

    Composite.add(world, ball[0]);
    Composite.add(world, ball[1]);
    Composite.add(world, ball[2]);
    Composite.add(
      world,
      Constraint.create({
        pointA: { x:500, y:0 },
        bodyB: ball[0],
        // stiffness: 0, // make the constraint more loose.
        render: { strokeStyle: '#9e9e9e' }, // Light gray rope
      })
    );
    Composite.add(  world,
        Constraint.create({
          pointA: { x: 300, y: 0 },
          bodyB: ball[1],
        //   stiffness:0.05, // make the constraint more loose.
          render: { strokeStyle: '#9e9e9e' }, // Light gray rope
        }));
    Composite.add(  world,
            Constraint.create({
              pointA: { x: 400, y:0 },
              bodyB: ball[2],
            //   stiffness: 0.01, // make the constraint more loose.
              render: { strokeStyle: '#9e9e9e' }, // Light gray rope
            }));
    
    const mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      });

    Composite.add(world, mouseConstraint);

    render.mouse = mouse;

    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: 900, y: 1000 },
    });

    return () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.World.clear(world);
      Matter.Engine.clear(engine);
    };
  }, []);

  return(
        <canvas ref={canvasRef} className='absolute top-0 left-0 -z-1 cursor-pointer flex justify-between w-full' />
  ) 
}
export default WreckingBall;
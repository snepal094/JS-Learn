/*
Create an object named laptopDetails. 
Add fields like brand, processor,ram,core,gpu,storage,screenSize. 
Do object destructure and print out laptop details.
*/

const laptopDetails = {
  brand: "Dell",
  processor: "Intel",
  ram: 16, //GB
  core: 4,
  gpu: "Nvidia",
  storage: 512, //GB
  screenSize: "14 inches",
};

const { brand, processor, ram, core, gpu, storage, screenSize } = laptopDetails;
console.log(brand);
console.log(processor);
console.log(ram);
console.log(core);
console.log(gpu);
console.log(storage);
console.log(screenSize);

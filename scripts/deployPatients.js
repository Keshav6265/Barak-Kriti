const hre=require('hardhat');

async function main(){
  const Patients= await ethers.getContractFactory("Patients");
  const patients=await Patients.deploy();
  console.log("address of Patients:",patients.target);
}

main()
.then(()=> process.exit(0))
.catch((error)=>{
  console.log(error);
  process.exit(1);
});
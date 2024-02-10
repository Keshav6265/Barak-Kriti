const hre=require('hardhat');

async function main(){
  const Doctors= await ethers.getContractFactory("Doctors");
  const doctors=await Doctors.deploy();
  console.log("address of doctors:",doctors.target);
}

main()
.then(()=> process.exit(0))
.catch((error)=>{
  console.log(error);
  process.exit(1);
});
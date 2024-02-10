const hre=require('hardhat');

async function main(){
  const AccessControl= await ethers.getContractFactory("AccessControl");
  const accessControl=await AccessControl.deploy();
  console.log("address of accessControl:",accessControl.target);
}

main()
.then(()=> process.exit(0))
.catch((error)=>{
  console.log(error);
  process.exit(1);
});
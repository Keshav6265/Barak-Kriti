const hre=require('hardhat');

async function main(){
  const Records= await ethers.getContractFactory("Records");
  const records=await Records.deploy();
  console.log("address of Patients:",records.target);
}

main()
.then(()=> process.exit(0))
.catch((error)=>{
  console.log(error);
  process.exit(1);
});
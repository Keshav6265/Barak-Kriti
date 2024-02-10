const { ethers } = require("hardhat");


async function main() {
  // Deploy AccessControl contract
  const AccessControl = await ethers.getContractFactory("AccessControl");
  const accessControl = await AccessControl.deploy();
  // await accessControl.deployed();
  
  console.log("AccessControl contract deployed to:", accessControl.target);

  // Deploy Doctors contract
  const Doctors = await ethers.getContractFactory("Doctors");
  const doctors = await Doctors.deploy();
  // await doctors.deployed();
  console.log("Doctors contract deployed to:", doctors.target);

  // Deploy Patients contract
  const Patients = await ethers.getContractFactory("Patients");
  const patients = await Patients.deploy();
  // await patients.deployed();
  console.log("Patients contract deployed to:", patients.target);

  // Deploy Records contract
  const Records = await ethers.getContractFactory("Records");
  const records = await Records.deploy();
  // await records.deployed();
  console.log("Records contract deployed to:", records.target);

  // Deploy MedicalInfoAddGet contract
  const MedicalInfo = await ethers.getContractFactory("MedicalInfo");
  const medicalInfo = await MedicalInfo.deploy(
    patients.target,
    doctors.target,
    records.target
  );
  // await medicalInfoAddGet.deployed();
  console.log("MedicalInfo contract deployed to:", medicalInfo.target);

  // Optionally, you can save the deployment information for future reference
//   saveDeploymentInfo({
//     AccessControl: accessControl.target,
//     Doctors: doctors.target,
//     Patients: patients.target,
//     Records: records.target,
//     MedicalInfoAddGet: medicalInfoAddGet.target,
//   });


}

// function saveDeploymentInfo(deploymentInfo) {
//   // Save deployment information to a file or database
//   // This is optional but can be helpful for tracking deployed contracts
//   // Example: Save to a JSON file
//   const fs = require("fs");
//   fs.writeFileSync("deployed-contracts.json", JSON.stringify(deploymentInfo, null, 2));
// }

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
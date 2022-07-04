async function main() {
    const [deployer] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("Name");
    const token = await Token.deploy();
    console.log("Deployed By:- ", deployer.address);
    console.log("Contract Address:- ", token.address);
  }
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
  });
const { expect } = require("chai");

describe("Name contract", function () {
  it("Should return the new name once it's changed", async function () {
    const Name = await ethers.getContractFactory("Name");
    const hardhatName = await Name.deploy();
     (await hardhatName.setMyname("Avineesh"));
    console.log(await hardhatName.getMyname());
    
  });
});
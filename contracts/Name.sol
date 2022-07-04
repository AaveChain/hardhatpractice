// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.5.0<0.9.0;

contract Name{
    //string public name="NAME";
    string name;
    function getMyname() public view returns(string memory){
        return name;
    }

    function setMyname(string memory myname) public{
        name=myname;
    }

}


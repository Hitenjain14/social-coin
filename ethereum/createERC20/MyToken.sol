// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.7;

import "./ERC20.sol";

contract TokenFactory{
    mapping(address => address) public tokens;
    function createToken(string memory _name,string memory _symbol) public {
        MyToken token = new MyToken(_name,_symbol,msg.sender);
        tokens[msg.sender] = address(token);
    }

    function getToken() public view returns(address){
        return tokens[msg.sender];
    }

}

contract MyToken is ERC20{

    address immutable admin;

    constructor(string memory _name,string memory _symbol,address _owner)ERC20(_owner,_name,_symbol){
        
         admin = _owner;
    }

}
    

    


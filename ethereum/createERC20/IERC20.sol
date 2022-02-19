// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;


interface IERC20{

    function totalSupply() external view returns(uint);

    function balanceOf(address account) external view returns(uint);

    function transfer(address _to,uint _amount) external returns(bool);

    function allowance(address _owner,address _spender) external returns(uint);

    function approve(address _spender,uint _amount) external returns(bool);

    function transferFrom(address _owner,address _receiver,uint _amount) external returns(bool);

    event Transfer(address indexed from,address indexed to,uint amount );

    event Approval(address indexed owner,address indexed spender,uint amount);


}
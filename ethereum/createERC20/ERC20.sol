// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "./IERC20.sol";
import "./utils/Helper.sol";
import "./utils/IERC20Metadata.sol";





contract  ERC20 is Helper,IERC20,IERC20Metadata{

    mapping(address => uint) private _balance;

    mapping(address => mapping(address => uint)) private _allowance;

    uint private constant _totalSupply = 100 ether;


    string private _name;
    string private _symbol;

    constructor(address owner,string memory name_,string memory symbol_){
        _name = name_;
        _symbol = symbol_;
        _balance[owner] += 100 ether;
        emit Transfer(address(0),owner,100 ether);
    }

    function name() public view virtual override returns(string memory){
        return _name;
    }

    function symbol() public view virtual override returns(string memory){
        return _symbol;
    }

    function decimals() public view virtual override returns(uint8){
        return 18;
    }

    function totalSupply() public view virtual override returns(uint){
        return _totalSupply;
    }

    function balanceOf(address account) public view virtual override returns(uint){
        return _balance[account];
    }

    function _transfer(address from,address to,uint amount) internal virtual{
        require(from != address(0),"transfer from zero address");
        require(to != address(0),"transfer to zero address");
        uint fromBalance = _balance[from];
        require(fromBalance>=amount,"amount exceeds balance");

        unchecked {
            _balance[from] -= amount;
        }
        _balance[to] += amount;

        emit Transfer(from,to,amount);

    }


    function transfer(address _to,uint _amount) public virtual override returns(bool){
        address owner = _msgSender();
       _transfer(owner,_to,_amount);
       return true;
    }

    function allowance(address _owner,address _spender) public view virtual override returns(uint){
        return _allowance[_owner][_spender];
    }

    function approve(address _spender,uint _amount ) public virtual override returns(bool){

        address owner = _msgSender();
        _approve(owner,_spender,_amount);
        return true;

    }

    function _approve(address owner,address spender,uint amount) internal virtual{
        require(owner != address(0),"approve from zero address");
        require(spender != address(0),"approve to zero address");


        _allowance[owner][spender] = amount;
        emit Approval(owner,spender,amount);
    }

    function transferFrom(address owner,address receiver,uint amount) public virtual override returns(bool){
            address spender = _msgSender();
            _spendAllowance(owner,spender,amount);
            _transfer(owner,receiver,amount);
            return true;
    }

    function _spendAllowance(address owner,address spender, uint amount) internal virtual{

        uint currentAllowance = allowance(owner,spender);

        if (currentAllowance != type(uint256).max) {
            require(currentAllowance >= amount, "insufficient allowance");
            unchecked {
                _approve(owner, spender, currentAllowance - amount);
            }
        }
    }

    function increaseAllowance(address spender,uint amount) public virtual returns(bool){

        address owner = _msgSender();
        _approve(owner,spender,_allowance[owner][spender] + amount);

        return true;
    }

    function descreaseAllowance(address spender,uint amount) public virtual returns(bool){
        address owner = _msgSender();
        uint256 currentAllowance = _allowance[owner][spender];
        require(currentAllowance >= amount, "decreased allowance below zero");
         unchecked {
            _approve(owner, spender, currentAllowance - amount);
        }
        return true;
    }
    


}





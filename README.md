# Full-Stack-App-HardHat

### For intro - https://hardhat.org/getting-started/
### Step01-  Initial Commit
### Step02-  npm install
### Step03-  Remove Code from src/backend/contracts/Token.sol
### Step04-  Import Console.log function from hardhat by adding <import "hardhat/console.sol">
### Step05-  Add Basic Functionality for Erc20 token by giving it a name and a symbol
### Step06-  Give totalSupply, Owner and balances to the function
### Step07-  Create the constructor function which gives the totalSupply to the balances of the owner when the token is deployed
### Step08-  Create the transfer function
### Step09-  Create the balanceOf function to determine how many tokens one has, (You could also change balances above to balanceOf to make this function public)
### Step10-  Go to terminal and compile the function by typing in <npx hardhat compile>
### Step11-  Now test the function- The tests in test/Token.js dir are self-explanatory - type in terminal - npx hardhat test - 5 passing
### Step12-  You could also comment out the console.log statements in Token.sol and run test again to see how console.log works
### Step13-  Now setup the blockchain on hardhat by typing in the terminal <npx hardhat node> and get 20 accounts(1000 ethers each) with private keys and port 8545
### Step14-  Deploy the Contract on the BlockChain by typing in terminal <npx hardhat run src/backend/scripts/deploy.js --network localhost>  
### Step15-  Now you could play by typing in <npx hardhat console ---network localhost>   
### Step15a- Type in node env from test/Token.js<Token = await ethers.getContractFactory("Token");> for getting the Token Contract
### Step15b- Then you could type in <hardhatToken = await Token.deploy();> to get the token
### Step15c- Then in the same node env type hardhatToken.address to get the address and then type .exit to get back to the terminal

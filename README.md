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
### Step10-  Go to terminal and compile the function by typing in     npx hardhat compile
### Step11-  Now test the function-  test/Token.js is self-explanatory - type in terminal - npx hardhat test     - 5 tests shall pass
### Step12-  (Optional)- For knowledge sake comment out the console.log statements in Token.sol and run test again to see how console.log works 
### Step13-  Setup the blockchain on hardhat by typing in terminal   npx hardhat node   and get 20 accounts(1000 ethers each) with private keys and port 8545
### Step14-  Deploy the Contract on the BlockChain by typing in terminal    npx hardhat run src/backend/scripts/deploy.js --network localhost  
### Step15-  Now you could play by typing in   npx hardhat console ---network localhost   
### Step15a- Type in node env from test/Token.js for getting the Token Contract    Token = await ethers.getContractFactory("Token"); 
### Step15b- Then you could type in to get the token      hardhatToken = await Token.deploy(); 
### Step15c- Then in the same node env type hardhatToken.address to get the address and then type .exit to get back to the terminal
### Step16-  In the terminal main dir type npm run start make slight adjustment in app.js by placing import react statement at the top
### Step17-  Open metamask- connect to localhost - import private key for account[0] in hardhat console - 
### Step18-  Connect and the metamask and the react app should show the same account balance
### Step19-  Burn 1 token - There might be an error like this - Error: Incompatible EIP155-based V 2710 and chain id 31337.
### Solution-The solution is to manually change the project's configuration so that 1337 is used as chainId. This causes unnecessary friction.



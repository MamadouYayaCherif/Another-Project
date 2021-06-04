$("document").ready(function(){
    /*var replace = $("<p>")
    replace.append("<h2> I have just replace something</h2>")
    $("#rightPart").html(replace);*/

   /* $("#rightPart").on('click', whenMouseIsClicked);

    $("#rightPart").on('mouseleave', whenMouseLeaves);

    function whenMouseIsClicked() {
        $("#rightPart").css("background-color", "black");
    }

    function whenMouseLeaves() {
        var message = $("<p>")
        message.append("<h1> Where are you going to ?</h1>")
        $("#rightPart").html(message);
    }*/

    /*$(".games").on('click', whenMouseIsClicked);

    $(".games").on('mouseleave', whenMouseLeaves);

    function whenMouseIsClicked() {
        $(".games").css("background-color", "cyan");
    }

    function whenMouseLeaves() {
        $(".games").css("background-color", "rgba(255,255,255,0.1)");
    }*/

   
    /*
    function loadMenu() {
        $('.games').html(`<div class="list-group">
        <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Menu</a>
      
        <a href="#" class="list-group-item list-group-item-action list-group-item-primary ">  1-Transfer Money</a>
       
        <a href="#" class="list-group-item list-group-item-action list-group-item-secondary"> 2-MoMOPay & Pay Bill</a>
        <a href="#" class="list-group-item list-group-item-action list-group-item-success">  3-Airtime & Bundles</a>
        <a href="#" class="list-group-item list-group-item-action list-group-item-danger">  4-Allow Cash Out</a>
        <a href="#" class="list-group-item list-group-item-action list-group-item-warning">  5-Financial Services</a>
        <a href="#" class="list-group-item list-group-item-action list-group-item-info"> 6-My wallet</a>
       
      </div>`);
    }*/

   
    //local storage
    userinfo =[{
        fulName:'user1',
        tel:'0274964385',
        pin:7667,
        balance:5000
    }]
    if(localStorage.getItem('momoinfo')== null)
    {
        localStorage.setItem('momoinfo', JSON.stringify(userinfo));
      
    }else{
        var data= JSON.parse(localStorage.getItem('momoinfo')) ;
    }
    //bill
    bill1 =[{
        subject:'Electricity',
        amount:70,
        pin:7667
    }]

    bill2 =[{
        subject:'water',
        amount:40,
        pin:7667
    }]

    bill3 =[{
        subject:'transportation',
        amount:20,
        pin:7667
    }]
    if(localStorage.getItem('bill1')== null && localStorage.getItem('bill2')== null && localStorage.getItem('bill3')== null){ 
        localStorage.setItem('bill1', JSON.stringify(bill1));
        localStorage.setItem('bill2', JSON.stringify(bill2));
        localStorage.setItem('bill3', JSON.stringify(bill3));
    }else
    {
        var table = new Array(3);
            table[0] =  JSON.parse(localStorage.getItem('bill1')); 
            table[1] =  JSON.parse(localStorage.getItem('bill2')); 
            table[2] =  JSON.parse(localStorage.getItem('bill3')); 
    }
    

    Mainmain();
   

    $("#submit").on('click', function () {
        var setcode= $('#setCode').val()
        if(setcode.localeCompare('*170#')==0)
        {
            $('#spiner').removeClass('visually-hidden')
            $('#looding').removeClass('visually-hidden')
            $('#ok').addClass('visually-hidden')
            $("#submit").attr('disabled', true)
            setTimeout(()=>{loadMenu()},2000)
        }else
        {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: 'Your imput is not Valide'
              });
           
            
        }
        
    });

    function loadMenu() {
                $('#Menu').removeClass('visually-hidden')
            $('#spiner').addClass('visually-hidden')
            $('#looding').addClass('visually-hidden')
            $('#Menu').addClass('animate__animated animate__bounce')
            $('#MainPrincipal').addClass('visually-hidden')        
      
    }

    function Mainmain() {
        $('#MainPrincipal').html(`<div class="row">
        <div class="col-md-12"> 
                    <div class="input-group mb-3 " >
                        <span class="input-group-text" id="basic-addon3"> <h2> Momo Code </h2></span>
                        <input type="text" placeholder=" * 170 #" class="form-control " value="*170#"  id="setCode" aria-describedby="basic-addon3">
                        <div>
                            <small class="erreur"></small>
                        </div>
                    </div>
                    
                    <div style="text-align: center;">
                        <button type="button" class="btn btn-success" id="submit">
                            <span id="spiner" class="spinner-border spinner-border-sm  visually-hidden "  role="status" aria-hidden="true"></span>
                            <span id="looding" class="visually-hidden" >Loading...</span>
                            <span id="ok" class="ok"> <h3> OK </h3></span>
                        </button>
                    </div>
                </div>

        </div>`);
        
    }

    function main() {
        const mainInfo = `<div class="col-12 col-sm-12 col-md-12 con visually-hidden " id="Menu" >
                    <div class="col-4 col-sm-4 col-md-4 col"> 
                        <div class="cntIcon">
                            <img src="public/image/money_transfer.png" class="img-responsive myPicture" id="money_transfer">
                            <strong style="color: darkblue;"> Money Transfer </strong> 
                        </div>
                    
                    </div>
                    <div class="col-4 col-sm-4 col-md-4 col"> 
                        <div class="cntIcon">
                            <img src="public/image/MomoPay_PayBill.png" class="img-responsive myPicture" id="MomoPay_PayBill">
                            <strong style="color: darkblue;">MomoPay_PayBill</strong> 
                        </div>
                    </div>
                    <div class="col-4 col-sm-4 col-md-4 col"> 
                        <div class="cntIcon">
                            <img src="public/image/Airtime_Bundles.png" class="img-responsive myPicture" id="Airtime_Bundles">
                            <strong style="color: darkblue;">Airtime_Bundles</strong>
                        </div>
                    </div>
                    <div class="col-4 col-sm-4 col-md-4 col"> 
                        <div class="cntIcon">
                            <img src="public/image/Allow_CashOut.png" class="img-responsive myPicture" id="Allow_CashOut">
                            <strong style="color: darkblue;"> Allow_CashOut </strong> 
                        </div>
                    </div>
                    <div class="col-4 col-sm-4 col-md-4 col"> 
                        <div class="cntIcon">
                            <img src="public/image/Financial_Services.png" class="img-responsive myPicture" id="Financial_Services">
                            <strong style="color: darkblue;">Financial_Services</strong>
                        </div>
                    </div>
                    <div class="col-4 col-sm-4 col-md-4 col"> 
                        <div class="cntIcon">
                            <img src="public/image/Wallet.png" class="img-responsive myPicture">
                            <strong style="color: darkblue;"> Wallet </strong>
                        </div>
                    </div>
            </div>
            `;
        return mainInfo;
        
    }

   

    function MomeyTransfert() {
                $('.games').html(`<div class="row animate__animated animate__backInRight" id="Ttext">
                  <h1>Money Transfert</h1>
                <div class="col-md-12"> 
                   <div class="input-group mb-3 MarginV">
                        <button class="btn btn-outline-secondary" type="button" id="Momo_User"  style="width: 20%;"><h1> 1) - </h1></button>
                        <input class="imputSize"  type="text" readonly   class="form-control" placeholder="Momo User" aria-label="Example text with button addon" aria-describedby="button-addon1">
                    </div>
                    <div class="input-group mb-3 MarginV">
                        <button class="btn btn-outline-secondary" type="button" id="Nom_MoMo_User" style="width: 20%;"><h1> 2) - </h1></button>
                        <input class="imputSize"  type="text" readonly class="form-control" placeholder="Nom MoMo User" aria-label="Example text with button addon" aria-describedby="button-addon1">
                    </div>
                    <div class="input-group mb-3 MarginV">
                        <button class="btn btn-outline-secondary" type="button" id="back_M" style="width: 20%;"><h1> 0) - </h1></button>
                        <input class="imputSize" type="text" readonly class="form-control" placeholder="Back" aria-label="Example text with button addon" aria-describedby="button-addon1">
                    </div>
                   
                </div>

        </div>`
    
        );
  
        function loadBack() {
            $('.myMain').html(main());
            $('#Ttext').addClass('visually-hidden')
            $('#Menu').removeClass('visually-hidden')
            
        }
        var btn = document.getElementById('back_M');
        btn.addEventListener('click',()=>{
            loadBack();
        })
        
    }

    function MomoPay_PayBill() {
        $('.games').html(`<div class="row">
                  <h1> MomoPay & PayBill</h1>
                    <div class="col-md-12 animate__animated animate__backInRight"> 
                        <div class="input-group mb-3 MarginV" >
                            <button class="btn btn-outline-secondary" type="button" id="button-addon1" style="width: 20%;"><h1> 1) - </h1></button>
                            <input class="imputSize"  type="text" readonly class="form-control" placeholder="MomoPay" aria-label="Example text with button addon" aria-describedby="button-addon1">
                        </div>
                        <div class="input-group mb-3 MarginV" >
                            <button class="btn btn-outline-secondary" type="button" id="button-addon1" style="width: 20%;"><h1> 2) - </h1></button>
                            <input class="imputSize"  type="text" readonly class="form-control" placeholder="Pay Bill" aria-label="Example text with button addon" aria-describedby="button-addon1">
                        </div>
                        <div class="input-group mb-3 MarginV ">
                            <button class="btn btn-outline-secondary" type="button" id="back" style="width: 20%;"><h1> 0) - </h1></button>
                            <input class="imputSize" type="text" readonly class="form-control" placeholder="Back" aria-label="Example text with button addon" aria-describedby="button-addon1">
                        </div>
                    </div>`
                    );
                    var btn = document.getElementById('back');
                    btn.addEventListener('click',()=>{
                        BillList();
                        inserNewRecord();
                    })
    }

 
    function onDelete() {
        var table1 = document.getElementById("SubjectList").getElementsByTagName('tbody')[0]; 
        table1.deleteRow()
           
       

            // if( parseFloat(table[0][0].amount)  <= parseFloat(data[0].balance) )
            //     {
            //         var TransferValue = data[0].balance - table[0][0].amount;
            //         userinfo[0].balance = TransferValue;
            //         localStorage.setItem('momoinfo', JSON.stringify(userinfo));
            //        // document.getElementById("SubjectList").deleteRow(table[0][0].rowIndex);
            //         alert('sucess !!!!')
            //     }else
            //     {
            //         alert('your balance is not enought for this operation')
            //     }
        
    }
    function inserNewRecord() {
        var table1 = document.getElementById("SubjectList").getElementsByTagName('tbody')[0]; 
        for (let index = 0; index < table.length; index++) {
            var r =table1.insertRow();
            var cell1 = r.insertCell();
            var cell2 = r.insertCell();
            var cell3 = r.insertCell();
            cell1.innerHTML = table[index][0].subject
            cell2.innerHTML = table[index][0].amount
            cell3.innerHTML = `<button type="button" value= '${index}' class="btn btn-outline-secondary " id="payBill" > Pay_Bill </button>`;
        }
        

         var btn1 = document.getElementById('payBill');
                btn1.addEventListener('click',()=>{
                   alert(document.getElementById('payBill').value) ;
                   table1.deleteRow(parseInt(document.getElementById('payBill').value))
                })  
        
    }

    function BillList() {
            $('.games').append(`<div>
            <div style="background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.7),rgba(255,255,255,0.3)); " >
            
                <div class="panel-body" >
                    <table class="table table-bordered table-striped" id ="SubjectList">
                        <thead>
                            <tr>
                                <th>Subject</th>
                                <th>Amount</th>
                                <th>Action</th>
                            </tr> 
                        </thead>

                        <tbody>

                        </tbody>
                        
                    </table>
                </div>
            </div>
        </div>`);
    
            
    }

    function Airtime_Bundles() {
        $('.games').html(`<div class="row animate__animated animate__backInRight">
                  <h1> Airtime & Bundles </h1>
                    <div class="col-md-12"> 
                        <div class="input-group mb-3 MarginV">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon1" style="width: 20%;"><h1> 1) - </h1></button>
                            <input class="imputSize"  type="text" readonly class="form-control" placeholder="Airtime" aria-label="Example text with button addon" aria-describedby="button-addon1">
                        </div>
                        <div class="input-group mb-3 MarginV">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon1" style="width: 20%;"><h1> 2) - </h1></button>
                            <input class="imputSize"  type="text" readonly class="form-control" placeholder="internet Bundles" aria-label="Example text with button addon" aria-describedby="button-addon1">
                        </div>
                        <div class="input-group mb-3 MarginV">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon1" style="width: 20%;"><h1> 3) - </h1></button>
                            <input class="imputSize"  type="text" readonly class="form-control" placeholder="Fixed Broadband" aria-label="Example text with button addon" aria-describedby="button-addon1">
                        </div>
                        <div class="input-group mb-3 MarginV " >
                            <button class="btn btn-outline-secondary" type="button" id="back" style="width: 20%;"><h1> 0) - </h1></button>
                            <input class="imputSize" type="text" readonly class="form-control" placeholder="Back" aria-label="Example text with button addon" aria-describedby="button-addon1">
                        </div>
                    </div>`
                    );
    }

    function Allow_CashOut() {
        $('.games').html(`<div class="row animate__animated animate__backInRight">
                  <h1> Allow_CashOut </h1>
                    <div class="col-md-12"> 
                        <div class="input-group mb-3 MarginV">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon1" style="width: 20%;"><h1> 1) - </h1></button>
                            <input class="imputSize"  type="text" readonly class="form-control" placeholder="YES" aria-label="Example text with button addon" aria-describedby="button-addon1">
                        </div>
                        <div class="input-group mb-3 MarginV">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon1" style="width: 20%;"><h1> 2) - </h1></button>
                            <input class="imputSize"  type="text" readonly class="form-control" placeholder="NO" aria-label="Example text with button addon" aria-describedby="button-addon1">
                        </div>
                        <div class="input-group mb-3 MarginV">
                            <button class="btn btn-outline-secondary" type="button" id="back" style="width: 20%;"><h1> 0) - </h1></button>
                            <input class="imputSize" type="text" readonly class="form-control" placeholder="Back" aria-label="Example text with button addon" aria-describedby="button-addon1">
                        </div>
                    </div>`
                    );
    }

    $('.myMain').html(main());

    /*-------------------------------------------------- Differant Menu ----------------------------------------------------------------*/
    $("#money_transfer").on('click', ()=>{
        MomeyTransfert();
        
    });
 
    $("#MomoPay_PayBill").on('click', ()=>{
        MomoPay_PayBill();
        
    });

    $("#Airtime_Bundles").on('click', ()=>{
        Airtime_Bundles();
        
    });

    $("#Allow_CashOut").on('click', ()=>{
        Allow_CashOut();
        
    });

 
    /*-------------------------------------------------under Menu Momo User------------------------------------------------------------------- */
        var arr = new Array();

        function showData() {
            var table1 = document.getElementById("SubjectList").getElementsByTagName('tbody')[0]; 
            getData();
            for (let index = 0; index < arr.length; index++) {
                var r =table1.insertRow();
                var cell1 = r.insertCell();
                var cell2 = r.insertCell();
                var cell3 = r.insertCell();
                cell1.innerHTML =arr[index].Telephone;
                cell2.innerHTML = arr[index].Amount;
                cell3.innerHTML = arr[index].my_Date;
            }
           
        }

        function getData() {
            var str=localStorage.getItem("transferData");
            if(str != null)
            {
                arr = JSON.parse(str)
            }    
            
        }

        function addTransferRecord() {
            getData();
               let  myDate = new Date();
               var an= myDate.getFullYear();
                var mm = myDate.getMonth();
                var dd = myDate.getDay();
                myDate = ` the ${dd} / ${mm} / ${an} at ${myDate.getHours()} : ${myDate.getMinutes()} Minute`;
            arr.push({
                Telephone:document.getElementById("Telephone").value,
                Amount:document.getElementById("Amount").value,
                my_Date:myDate
            });
            localStorage.setItem("transferData",JSON.stringify(arr))
            
        }

      
        function TransferList() {
                $('.games').append(`<div>
                <div style="background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.7),rgba(255,255,255,0.3)); " >
                
                    <div class="panel-body" >
                        <table class="table table-bordered table-striped" id ="SubjectList">
                            <thead>
                                <tr>
                                    <th>Telephone</th>
                                    <th>Amount</th>
                                    <th>Date</th>              
                                </tr> 
                            </thead>

                            <tbody>

                            </tbody>
                            
                        </table>
                    </div>
                </div>
            </div>`);

                
        }
       
    function Momo_User() {
        $('.games').html(`<div class="row ">
                  <h1> Momo_User </h1>
                  <form action="#" name="registration" id="basic-form">
                        <div class="col-md-12 animate__animated animate__backInDown" > 
                            <div class="input-group mb-3 MarginV" style="width: 60%;">
                                <span class="input-group-text" id="TelephoneNumber" style="width: 40%;" > <h4>Telephone Number </h4> </span>
                                <input type="number" style=" font-size: 20px;" minlength="10" value="" id="Telephone" class="form-control"  placeholder="Receiver Telephone Number" aria-describedby="basic-addon3" required>
                            </div>
                            <div class="input-group mb-3 MarginV" style="width: 60%;">
                                <span class="input-group-text" id="balance" style="width: 40%;"><h4>Amount of Money </h4></span>
                                <input type="number"  style=" font-size: 20px;"minlength="2" value="" name="Amount" id="Amount"  class="form-control"  placeholder="Amount of Transfert" aria-describedby="basic-addon3" required>
                            </div>
                            <div class="input-group mb-3 MarginV" style="width: 60%;">
                                <span class="input-group-text" id="basic-addon3" style="width: 40%;"> <h4> Secret Code </h4> </span>
                                <input type="password" style=" font-size: 20px;" minlength="4" value="" name="CodeS" id="CodeS"   class="form-control"  placeholder=" Example 1234........" aria-describedby="basic-addon3" required>
                            </div>
                            <button type="button" class="btn btn-outline-secondary MarginV imputSize" id="saveData"> <h2>Submit </h2></button>
                        </div>
                    </form>`
                    );
                    document.getElementById('TelephoneNumber').innerHTML = `<h4> Tel ${data[0].tel} </h4>`;
                    document.getElementById('balance').innerHTML = `<h4> Balance ${data[0].balance} GHS </h4>`;  
                    //transferList
                    TransferList();
                    showData();
                    // button disabled
                    $("#saveData").attr('disabled', true)
                    $("#basic-form").validate()
                    $('#CodeS').focusout(()=>{
                        var TelephoneNumber = $('#Telephone').val();
                        var Amount = $('#Amount').val();
                        var CodeS = $('#CodeS').val();
                        if(CodeS.localeCompare(data[0].pin)==0 &&  Amount.length >=2 && TelephoneNumber.length == 10){
                            $("#saveData").attr('disabled', false)
                        }else
                        {
                            $("#saveData").attr('disabled', true)
                        }
                    });
                                     
    }

  

    function NomMomo_User() {
        $('.games').html(`<div class="row ">
                  <h1> Nom Momo_User </h1>
                    <div class="col-md-12 animate__animated animate__backInDown" > 
                        <div class="input-group mb-3 MarginV" style="width: 60%;">
                                <span class="input-group-text" id="basic-addon3" style="width: 40%;" > <h4>Receiver Name </h4> </span>
                                <input type="text" style=" font-size: 20px;" required="" id="NomUser" class="form-control" id="basic-url" placeholder=" Example 274 964 385" aria-describedby="basic-addon3">
                        </div>
                        <div class="input-group mb-3 MarginV" style="width: 60%;">
                            <span class="input-group-text" id="basic-addon3" style="width: 40%;"><h4>Amount of Money </h4></span>
                            <input type="number"  style=" font-size: 20px;"  id="Amount" required="" class="form-control" id="basic-url" placeholder=" Example 1234........" aria-describedby="basic-addon3">
                         </div>
                        <div class="input-group mb-3 MarginV" style="width: 60%;">
                            <span class="input-group-text" id="basic-addon3" style="width: 40%;" > <h4>Enter Referance </h4> </span>
                            <input type="text" style=" font-size: 20px;" required="" id="Telephone" class="form-control" id="basic-url" placeholder=" Example 274 964 385" aria-describedby="basic-addon3">
                        </div>
                        
                         <div class="input-group mb-3 MarginV" style="width: 60%;">
                            <span class="input-group-text" id="basic-addon3" style="width: 40%;"> <h4> Secret Code </h4> </span>
                            <input type="password" style=" font-size: 20px;" id="CodeS"  required="" class="form-control" id="basic-url" placeholder=" Example 1234........" aria-describedby="basic-addon3">
                         </div>
                         <button type="button" class="btn btn-outline-secondary MarginV imputSize" id="saveData"> <h2>Submit </h2></button>
                    </div>`
                    );
    }
    

    /* under Menu --->>>> Money Transfert ------------------------------------------------------------------------------*/
    $("#money_transfer").on('click', ()=>{
        $("#Momo_User").on('click', ()=>{
            Momo_User();
           
        });
    });
    $("#money_transfer").on('click', ()=>{
        $("#Nom_MoMo_User").on('click', ()=>{
            NomMomo_User();
            
        });
    });
    
    $("#money_transfer").on('click', ()=>{
        $("#Bank_Account").on('click', ()=>{
            alert('Bank_Account')
            
        });
    });

       
    /* ----------------------------------------------under Menu to under Menue------------------------------------------------------------ */
    // Transfert operation
    function cleanthis() {
        document.getElementById('CodeS').value= '';
        document.getElementById('Amount').value=''; 
        document.getElementById('Telephone').value='';     
    }
    function Transfert_operation(pin,amount) {
        if(pin.localeCompare(data[0].pin)==0)
        {
                if(amount <= parseFloat(data[0].balance)  && amount >0)
                {
                    var TransferValue = data[0].balance - amount;
                    userinfo[0].balance = TransferValue;
                    localStorage.setItem('momoinfo', JSON.stringify(userinfo));
                    document.getElementById('balance').innerHTML = `<h4> Balance ${TransferValue} GHS </h4>`;
                    addTransferRecord();
                    cleanthis();
                    alert('sucess !!!!');
                    //TransferList();

                    showData();
                    $("#saveData").attr('disabled', true);
                }else
                {
                    alert('your balance is not enought for this operation')
                }

                 
        }
        else
            alert('the pin is not correct');
        
    }

    
    $("#money_transfer").on('click', ()=>{
        $("#Momo_User").on('click', ()=>{
            $("#saveData").on('click', ()=>{
               
                    var pin = document.getElementById('CodeS').value;
                    var amount = parseFloat(document.getElementById('Amount').value); 
                    Transfert_operation(pin,amount)      
                                     
                
            });
            
        });
    });

   

});
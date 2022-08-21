
import styled from 'styled-components';

export const Container = styled.section`

section.container{
    margin:0 auto;
    width: 100%;
    max-width: 80rem;
    padding:1.5rem 0;

}   

section.container header{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
section.container header .container-header  {
    display: flex;
    justify-content: flex-start;
    align-items: center;

}   
section.container header img{
            display: block;
            background-size: 100%;
            margin-right: 4rem;
            height: 5rem;
        }

section.container header nav{
     width: 100%;
     max-width: 6rem;
 }
 section.container header nav ul {
    display: flex;
    justify-content: space-between;
 }
 section.container header nav ul li{
    list-style-type: none;
    padding: 0.5rem;
 }

 section.container header nav ul li a{
    text-decoration: none;
    color:${props =>props.theme.colors.clMenu};;
 }
 section.container header nav ul li:hover{
    text-decoration: none;
    background: #f7f7f7;
    border-radius: 0.5rem;
     
 }
  
section.container-gray{
    width: 100%;
    background:#f7f7f7;
}
    
 
section.container-gray .container-gray-content{
 
    padding: 1.5rem 0;
    margin:0 auto;
    max-width: 80rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}




section.container-gray .container-gray-content-card{
    max-width: 36rem;
    padding: 1.5rem;
    border-radius: 0.75rem;
    background:#fff;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    height:15.625rem;
}
    

section.container-gray .container-gray-content-card img{
        display: block;
        width: 2.5rem;
    }
    

 button{
    padding: 1rem 2rem;
    background-color:${props =>props.theme.colors.bgButton};
    border: 0;
    border-radius: 0.375rem;
    color:${props =>props.theme.colors.clButton};
    font-weight: 600;

}
 


section.container-gray .container-gray-content .container-gray-content-box  h2{
            font-size: 2.25rem;
            line-height: 2.5rem;
            margin-bottom:1rem;
        }
section.container-gray .container-gray-content .container-gray-content-box  p{
            margin-bottom:1rem;
            font-weight: 400;
        }

section.container-gray .container-gray-content .container-gray-content-box p:last-child{
            margin-bottom:0;
        }
    
section.container-form{
    padding: 2rem 0 1.5rem 0;
    margin:0 auto;
    max-width: 80rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
section.container-form form div input{
    height: 3.125rem;
    background: #fff;
    border:0;
    border: 1px solid #b4bfc8;
    border-radius: 0.5rem;
    padding: 0.75rem;
    width: 100%;
}

section.container-form form .form-box{
    display: flex;
    gap:0.5rem;
    margin-bottom: 2rem;
} 
section.container-form form .form-box div{
    display: flex;
    flex-direction: column;
    
    
}  
section.container-form form .box-inp-first .box-inp label{
    margin-bottom: 0.5rem;
     
}
section.container-form form .form-box  .box-inp label{
    margin-bottom: 0.5rem;
    color:${props =>props.theme.colors.label}
}
section.container-form form .box-inp-first .box-inp-2 label{
    margin-bottom: 0.5rem;
    color:${props =>props.theme.colors.label}
}
section.container-form form .box-inp-first .box-inp-2 {
    margin-bottom: 2rem;
}
section.container-form form .box-inp-first .box-inp-2 input{
    margin-top: 0.5rem ; 
}
p.error{
    color: #ce181e;
}


    @media (max-width:1320px){
        section.container header{
            padding: 0 1.5rem;
        }
    .container-gray-content-box{
        padding: 0 1.5rem;
        }
    .container-gray-content-card{
        margin-right: 1.5rem;
    }
    section.container-form{
            
            padding: 2rem 1.5rem 2rem 1.5rem;
        }
    }
 
    @media (max-width:720px){
        .container-gray-content{
            flex-direction: column;
        }
        .container-gray-content-card{
            margin-top: 1.5rem;
        }
    }
    @media (max-width:620px){
        section.container-form form .form-box{
            flex-direction: column;
        }
        section.container-form{
            display: block;
        }
        .container-gray-content-card{
            margin:0 1.5rem;
        }
        section.container header{
            flex-direction: column;
            align-items: center;
        }
        section.container header .container-header {
            flex-direction: column;
            align-items: center;
        }
        section.container header img{
            margin-right: 0;
        }
        section.container header nav{
            max-width: 16rem;
            margin-top: 1rem;
        }
    }
`

import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getPro, getFirst6Pro } from '../../redux/ProductSlice'
// import { getAllPro } from '../../services/ProductService'
const Product = () => {

  let dispatch = useDispatch();
  dispatch(getPro());
  // let data = useSelector(state=>state);
  let allPro = useSelector(state=>state);

  // setAllPro([...data]);

    
    // console.log(dispPro)
    let totalPro = allPro.length;
    let totalPages = Math.ceil(totalPro/6);
    let emptyArr = Array.from({ length : totalPages })
    // setDispPro(allPro.slice(0, 6));

    let getNext=(n)=>{
        
    }
 

  return (
    <div className='container'>
      <div className='row'>
      {
            allPro.slice(0, 6).map(item=>{
                return(
        <div key={item.id} className='col-md-4'>
          <div className='card m-1'>
            
              <div className='card rounded shadow-sm border-0'>
                <a><span className='text-danger d-flex justify-content-end'>X</span></a>
                <div className='card-body p-4'>
                  <h6 style={{height : "40px"}}>{item.title}</h6>
                  <p className='small' style={{minHeight : "100px"}}>{item.body}</p>
                  {/* <ul className='list-inline small'>
                    <li className='list-inline-item m-0'></li>
                    <li className='list-inline-item m-0'></li>
                    <li className='list-inline-item m-0'></li>
                    <li className='list-inline-item m-0'></li>
                  </ul> */}
                </div>
            
            </div>
          </div>
        </div>
                )
            })
        }
        {/* {totalPages} */}
        <ul className='pagination d-flex justify-content-center'>
          {
            emptyArr.map((item, index)=>{
              return(
                <li key={index} className='page-item'>
                  <button className='page-link' onClick={()=>getNext(index+1)}>{index+1}</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Product
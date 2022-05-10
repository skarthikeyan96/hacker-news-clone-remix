import moment from 'moment';

export type CardProps = {
  title: string
  point: string
  author: string
  time: number
}

const Card = (props: CardProps) => {
        return (
            <section className="text-gray-600 body-font overflow-hidden">
              <div className="py-2 mx-auto">
                <div className="-my-8">
                  <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:flex-grow">
                      <h5 className="font-medium text-gray-900 title-font mb-2">
                        {props.title}
                      </h5>
                      <p className="leading-relaxed">
                       {props.point} by {props.author} {moment.unix(props.time).fromNow()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
    
 
};

export default Card;

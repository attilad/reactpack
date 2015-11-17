using SampleProject.Models;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace SampleProject.Controllers
{
    public class ValuesController : ApiController
    {
        private readonly Dictionary<int, Gizmo> _values;
        public ValuesController()
        {
            _values = new Dictionary<int, Gizmo>();

            _values.Add(1, new Gizmo { Id = 1, Value = "Value 1" } );
            _values.Add(2, new Gizmo { Id = 2, Value = "Value 2" });
            _values.Add(3, new Gizmo { Id = 3, Value = "Value 3" });
        }

        // GET api/<controller>
        public IEnumerable<Gizmo> Get()
        {
            return _values.Values.AsEnumerable();
        }

        // GET api/<controller>/5
        public Gizmo Get(int id)
        {
            return _values[id];
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}
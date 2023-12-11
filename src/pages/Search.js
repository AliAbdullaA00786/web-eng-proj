function Search()
{
    return (
        <div className="container-custom">
            <div className="center">
                <form className="form-custom">

                    <div>
                        <h1 className="h1-custom">Search</h1>
                    </div>

                    <div>
                        <input className="text-field-custom" placeholder="Input Project Title"></input>
                    </div>

                    <div>
                        <button type="button" class="btn btn-dark" >Submit Search</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Search;
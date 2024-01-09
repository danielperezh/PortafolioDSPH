export class tags {

  static readonly angular = new tags("Angular");
  static readonly java = new tags("Java");
  static readonly Html = new tags("Html");
  static readonly css = new tags("Css");
  static readonly TypeScript = new tags("TypeScript");
  static readonly JavaScript = new tags("JavaScript");
  static readonly Csharp = new tags("C#");
  static readonly Bootstrap = new tags("Bootstrap");
  static readonly Net  = new tags(".Net Framework");
  static readonly ASPNET  = new tags("ASP.NET Core");
  static readonly AndroidStudio = new tags("Android Studio");
  static readonly SQLServer = new tags("SQL Server");
  static readonly PostgreSQL = new tags("PostgreSQL");
  static readonly Jupyter  = new tags("Jupyter Notebook");
  static readonly node  = new tags("Node.js");


  private constructor(private readonly key: string){

  }

  toString(){
    return this.key;
  }
  static [key: string]: tags;
}
